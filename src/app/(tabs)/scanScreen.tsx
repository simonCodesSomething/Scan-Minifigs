import { Ionicons } from "@expo/vector-icons";
import { CameraView, useCameraPermissions } from "expo-camera";
import * as Haptics from "expo-haptics";
import { router, useIsFocused } from "expo-router";
import { useState } from "react";
import {
  Image,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Minifigure } from "@/models/minifigure";
import { useCollectionStore } from "@/store/collectionStore";
import { useMinifigureStore } from "@/store/minifigureStore";
import { styles } from "@/styles/screens/scan.styles";

import CameraSettingsSheet from "../components/cameraSettingsSheet";

export default function ScanScreen() {
  const [permission, requestPermission] =
    useCameraPermissions();

  const isFocused = useIsFocused();

  const addScan = useCollectionStore(
    (state) => state.addScan
  );

  const collection = useCollectionStore(
    (state) => state.collection
  );

  const addScanToHistory = useCollectionStore(
    (state) => state.addScanToHistory
  );

  const increment = useCollectionStore(
    (state) => state.increment
  );

  const decrement = useCollectionStore(
    (state) => state.decrement
  );

  const lookupDataMatrix = useMinifigureStore(
    (state) => state.lookupDataMatrix
  );

  const [showSettings, setShowSettings] =
    useState(false);

  const [continuousScan, setContinuousScan] =
    useState(true);

  const [hapticsEnabled, setHapticsEnabled] =
    useState(true);

  const [flashEnabled, setFlashEnabled] =
    useState(false);

  const [lastScannedCode, setLastScannedCode] =
    useState("");

  const [scannedCode, setScannedCode] =
    useState("");

  const [scanResult, setScanResult] =
    useState<Minifigure | null>(null);

  const alreadyOwned =
    scanResult != null &&
    collection.some(
      (item) => item.id === scanResult.id
    );

  const ownedItem = collection.find(
    (item) => item.id === scanResult?.id
  );

  const onBarcodeScanned = ({
    data,
  }: {
    data: string;
  }) => {
    const code = data.trim().split(/\s+/)[0];

    console.log("DATA MATRIX:", code);

    if (code === lastScannedCode) {
      return;
    }

    setLastScannedCode(code);
    setScannedCode(code);

    const result = lookupDataMatrix(code);

    if (result) {
      console.log("MINIFIGURE FOUND:", result.id);

      setScanResult(result);

      addScanToHistory(result.id);

      if (hapticsEnabled) {
        Haptics.notificationAsync(
          Haptics.NotificationFeedbackType.Success
        );
      }
    } else {
      console.log("UNKNOWN DATA MATRIX:", code);

      setScanResult(null);

      if (hapticsEnabled) {
        Haptics.notificationAsync(
          Haptics.NotificationFeedbackType.Error
        );
      }
    }
  };

  const toggleFlash = () => {
    setFlashEnabled((previous) => !previous);
  };

  const openMinifigure = () => {
    if (!scanResult) {
      return;
    }

    router.push({
      pathname: "/(tabs)/SeriesDetails/[id]",
      params: {
        id: scanResult.id,
      },
    });
  };

  if (!permission) {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "black",
        }}
      />
    );
  }

  if (!permission.granted) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.permissionContainer}>
          <Text style={styles.permissionTitle}>
            Camera Permission Required
          </Text>

          <Text style={styles.permissionText}>
            We need camera access to scan LEGO
            Minifigure codes.
          </Text>

          <TouchableOpacity
            style={styles.permissionButton}
            onPress={requestPermission}
          >
            <Text style={styles.permissionButtonText}>
              Grant Permission
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "black",
      }}
    >
      {/* CAMERA
          Keep this exactly like the working test.
      */}
      {isFocused && (
        <CameraView
          style={{
            flex: 1,
          }}
          facing="back"
          enableTorch={flashEnabled}
          barcodeScannerSettings={{
            barcodeTypes: ["datamatrix"],
          }}
          onCameraReady={() => {
            console.log("CAMERA READY");
          }}
          onMountError={(error) => {
            console.error(
              "CAMERA MOUNT ERROR:",
              error
            );
          }}
          onBarcodeScanned={onBarcodeScanned}
        />
      )}

      {/* TRANSPARENT OVERLAY */}
      <View
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "transparent",
        }}
        pointerEvents="box-none"
      >
        {/* SCAN FRAME */}
        <View
          style={styles.scanFrame}
          pointerEvents="none"
        >
          <View style={styles.cornerTopLeft} />
          <View style={styles.cornerTopRight} />
          <View style={styles.cornerBottomLeft} />
          <View style={styles.cornerBottomRight} />
        </View>

        {/* RESULT CARD */}
        {(scanResult || scannedCode) && (
          <View style={styles.resultCard}>
            {scanResult ? (
              <>
                <Image
                  source={{
                    uri: scanResult.image,
                  }}
                  style={styles.resultImage}
                  resizeMode="contain"
                />

                <View style={styles.resultInfo}>
                  <Text
                    style={styles.resultTitle}
                    numberOfLines={2}
                  >
                    {scanResult.name}
                  </Text>

                  <Text style={styles.resultSubtitle}>
                    {scanResult.name}
                  </Text>

                  <View style={styles.quantityRow}>
                    <TouchableOpacity
                      style={styles.quantityButton}
                      onPress={() => {
                        if (alreadyOwned) {
                          decrement(scanResult.id);
                        }
                      }}
                      disabled={!alreadyOwned}
                    >
                      <Ionicons
                        name="remove"
                        size={20}
                        color={
                          alreadyOwned
                            ? "#111827"
                            : "#9CA3AF"
                        }
                      />
                    </TouchableOpacity>

                    <Text style={styles.quantityText}>
                      {ownedItem?.quantity ?? 0}
                    </Text>

                    <TouchableOpacity
                      style={styles.quantityButton}
                      onPress={() => {
                        if (alreadyOwned) {
                          increment(scanResult.id);
                        } else {
                          addScan(scanResult.id);

                          if (hapticsEnabled) {
                            Haptics.notificationAsync(
                              Haptics.NotificationFeedbackType
                                .Success
                            );
                          }
                        }
                      }}
                    >
                      <Ionicons
                        name="add"
                        size={20}
                        color="#111827"
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              </>
            ) : (
              <>
                <Ionicons
                  name="close-circle"
                  size={48}
                  color="#FF5252"
                />

                <View style={styles.resultInfo}>
                  <Text
                    style={styles.resultTitle}
                    numberOfLines={2}
                  >
                    Unknown Minifigure
                  </Text>

                  <Text style={styles.resultCode}>
                    Data Matrix: {scannedCode}
                  </Text>
                </View>
              </>
            )}
          </View>
        )}

        {/* CONTROLS */}
        <View style={styles.controls}>
          <TouchableOpacity
            style={styles.controlButton}
            onPress={toggleFlash}
          >
            <Ionicons
              name={
                flashEnabled
                  ? "flash"
                  : "flash-off"
              }
              size={28}
              color="#FFF"
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.controlButton}
            onPress={() =>
              setShowSettings(true)
            }
          >
            <Ionicons
              name="ellipsis-vertical-circle-sharp"
              size={28}
              color="#FFF"
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* SETTINGS */}
      <CameraSettingsSheet
        visible={showSettings}
        onClose={() =>
          setShowSettings(false)
        }
        continuousScan={continuousScan}
        setContinuousScan={setContinuousScan}
        haptics={hapticsEnabled}
        setHaptics={setHapticsEnabled}
      />
    </View>
  );
}

