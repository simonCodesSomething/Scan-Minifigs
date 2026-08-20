import Slider from "@react-native-community/slider";
import React from "react";
import {
    Modal,
    Pressable,
    StyleSheet,
    Switch,
    Text,
    View,
} from "react-native";

type Props = {
  visible: boolean;
  onClose: () => void;

  continuousScan: boolean;
  setContinuousScan: (value: boolean) => void;

  haptics: boolean;
  setHaptics: (value: boolean) => void;

  keepAwake: boolean;
  setKeepAwake: (value: boolean) => void;

  flash: boolean;
  setFlash: (value: boolean) => void;

  zoom: number;
  setZoom: (value: number) => void;
};

export default function cameraSettingsSheet({
  visible,
  onClose,
  continuousScan,
  setContinuousScan,
  haptics,
  setHaptics,
  keepAwake,
  setKeepAwake,
  flash,
  setFlash,
  zoom,
  setZoom,
}: Props) {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
    >
      <Pressable
        style={styles.backdrop}
        onPress={onClose}
      />

      <View style={styles.sheet}>
        <View style={styles.handle} />

        <Text style={styles.title}>
          Camera Settings
        </Text>

        <Text style={styles.section}>
          Scanning
        </Text>

        <SettingRow
          title="Continuous Scan"
          value={continuousScan}
          onValueChange={setContinuousScan}
        />

        <SettingRow
          title="Haptic Feedback"
          value={haptics}
          onValueChange={setHaptics}
        />

        <Text style={styles.section}>
          Camera
        </Text>

        <SettingRow
          title="Flash"
          value={flash}
          onValueChange={setFlash}
        />

        <SettingRow
          title="Keep Screen Awake"
          value={keepAwake}
          onValueChange={setKeepAwake}
        />

        <View style={styles.zoomContainer}>
          <Text style={styles.zoomTitle}>
            Zoom
          </Text>

          <Slider
            minimumValue={0}
            maximumValue={1}
            value={zoom}
            onValueChange={setZoom}
          />

          <Text style={styles.zoomValue}>
            {(zoom * 5 + 1).toFixed(1)}x
          </Text>
        </View>

        <Pressable
          style={styles.doneButton}
          onPress={onClose}
        >
          <Text style={styles.doneText}>
            Done
          </Text>
        </Pressable>
      </View>
    </Modal>
  );
}

function SettingRow({
  title,
  value,
  onValueChange,
}: {
  title: string;
  value: boolean;
  onValueChange: (value: boolean) => void;
}) {
  return (
    <View style={styles.row}>
      <Text style={styles.rowText}>
        {title}
      </Text>

      <Switch
        value={value}
        onValueChange={onValueChange}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.45)",
  },

  sheet: {
    backgroundColor: "#1E293B",
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    padding: 24,
  },

  handle: {
    width: 48,
    height: 5,
    borderRadius: 3,
    backgroundColor: "#64748B",
    alignSelf: "center",
    marginBottom: 20,
  },

  title: {
    color: "white",
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 20,
  },

  section: {
    color: "#94A3B8",
    marginTop: 12,
    marginBottom: 10,
    fontWeight: "700",
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 14,
  },

  rowText: {
    color: "white",
    fontSize: 17,
  },

  zoomContainer: {
    marginTop: 18,
  },

  zoomTitle: {
    color: "white",
    fontSize: 17,
    marginBottom: 8,
  },

  zoomValue: {
    color: "#94A3B8",
    alignSelf: "center",
  },

  doneButton: {
    backgroundColor: "#2563EB",
    borderRadius: 14,
    marginTop: 28,
    paddingVertical: 16,
  },

  doneText: {
    color: "white",
    textAlign: "center",
    fontWeight: "700",
    fontSize: 17,
  },
});