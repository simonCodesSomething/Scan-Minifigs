
import { Ionicons } from "@expo/vector-icons";
import { CameraView, useCameraPermissions } from "expo-camera";
import * as Haptics from "expo-haptics";
import { router } from "expo-router";
import React, { useState } from "react";
import {
  Image,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { useCollectionStore } from "@/store/collectionStore";
//import { styles } from "@/styles/scanScreen.styles";
import { styles } from "@/styles/screens/scan.styles";


import { Minifigure } from "@/models/minifigure";
import { useMinifigureStore } from "@/store/minifigureStore";
import { useIsFocused } from "@react-navigation/native";
import CameraSettingsSheet from "../components/cameraSettingsSheet";


export default function ScanScreen() {
  const [permission, requestPermission] = useCameraPermissions();
  const isFocused = useIsFocused();

  const addScan = useCollectionStore(
    (state) => state.addScan
  );

const [showSettings, setShowSettings] = useState(false);
const [continuousScan, setContinuousScan] = useState(true);
const [hapticsEnabled, setHapticsEnabled] = useState(true);
const [keepAwake, setKeepAwake] = useState(true);
const [zoom, setZoom] = useState(0);

  
  //const [scanned, setScanned] = useState(false);
  const [loading, setLoading] = useState(false);
  const [lastScannedCode, setLastScannedCode] = useState("");

  const [flashEnabled, setFlashEnabled] =
    useState(false);

  const [scannedCode, setScannedCode] =
    useState("");

const [scanResult, setScanResult] = useState<Minifigure | null>(null);
 const collection = useCollectionStore((state) => state.collection);
 const addScanToHistory = useCollectionStore(
  (state) => state.addScanToHistory
);
  
  const alreadyOwned =
  scanResult &&
  collection.some(item => item.id === scanResult.id);

  const ownedItem = collection.find(
  item => item.id === scanResult?.id
);

  const increment = useCollectionStore(
  state => state.increment
);
const decrement = useCollectionStore(
  state => state.decrement
);
const lookupDataMatrix = useMinifigureStore(
  (state) => state.lookupDataMatrix
);

  /**
   * Reset scanner
   */
  const resetScanner = () => {
    setLastScannedCode("");
    setScannedCode("");
    setScanResult(null);
    setLoading(false);
  };

const onBarcodeScanned = ({
  data,
}: {
  data: string;
}) => {
  const code = data.trim().split(/\s+/)[0];

  console.log("code", code);

  // Ignore the same code repeatedly while it remains in view
  if (code === lastScannedCode) {
    return;
  }

  setLastScannedCode(code);
  setScannedCode(code);

  const result = lookupDataMatrix(code);

  if (result) {
    // Update the UI immediately
    setScanResult(result);

    // Do secondary actions after updating the result
    addScanToHistory(result.id);

    if (hapticsEnabled) {
      Haptics.notificationAsync(
        Haptics.NotificationFeedbackType.Success
      );
    }
  } else {
    setScanResult(null);

    if (hapticsEnabled) {
      Haptics.notificationAsync(
        Haptics.NotificationFeedbackType.Error
      );
    }
  }
};

  const openMinifigure = () => {
    if (!scanResult) return;

    router.push({
      pathname: "/(tabs)/SeriesDetails/[id]",
      params: {
        id: scanResult.id,
      },
    });
  };

  /**
   * Toggle camera flash.
   */
  const toggleFlash = () => {
    setFlashEnabled((prev) => !prev);
  };

  if (!permission) {
    return <View />;
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
            <Text
              style={styles.permissionButtonText}
            >
              Grant Permission
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
    /**
   * Look up a scanned QR code.
   * Replace this with your Supabase lookup later if desired.
   */
 
    return (
    <SafeAreaView style={styles.container} edges={[]}>
      {/* ===========================
          Camera
      =========================== */}
      {isFocused ? (
      <CameraView
        style={styles.camera}
        facing="back"
        enableTorch={flashEnabled}
        barcodeScannerSettings={{
          barcodeTypes: ["datamatrix"],
        }}
        onBarcodeScanned={onBarcodeScanned}
        
      />) : null }

      {/* ===========================
          Overlay
`      =========================== */}

      <View style={styles.overlay}>

        {/* Header */}

        {/* ===========================
            Scan Frame
        =========================== */}

        <View style={styles.scanFrame}>

          <View style={styles.cornerTopLeft} />

          <View style={styles.cornerTopRight} />

          <View style={styles.cornerBottomLeft} />

          <View style={styles.cornerBottomRight} />

        </View>

        {/* ===========================
            Instructions
        =========================== */}


                {/* ===========================
            Live Scan Result
        =========================== */}

{(scanResult || scannedCode) && (
  <View style={styles.resultCard}>
    {scanResult ? (
      <>
        <Image
          source={{ uri: scanResult.image }}
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
                color={alreadyOwned ? "#111827" : "#9CA3AF"}
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
                      Haptics.NotificationFeedbackType.Success
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

                {/* ===========================
            Floating Controls
        =========================== */}

<View style={styles.controls}>
  {/* Flash */}
  <TouchableOpacity
    style={styles.controlButton}
    onPress={toggleFlash}
  >
    <Ionicons
      name={flashEnabled ? "flash" : "flash-off"}
      size={28}
      color="#FFF"
    />
  </TouchableOpacity>

  {/* Camera Controls */}
  <TouchableOpacity
    style={styles.controlButton}
onPress={() => setShowSettings(true)}
  >
    <Ionicons
      name="ellipsis-vertical-circle-sharp"
      size={28}
      color="#FFF"
    />
  </TouchableOpacity>
</View>
      </View>
    <CameraSettingsSheet
  visible={showSettings}
  onClose={() => setShowSettings(false)}
  continuousScan={continuousScan}
  setContinuousScan={setContinuousScan}
  haptics={hapticsEnabled}
  setHaptics={setHapticsEnabled}
/>
    </SafeAreaView>
  );
}

function addScanToHistory(id: string) {
  throw new Error("Function not implemented.");
}
