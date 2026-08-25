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
};

export default function ScanSettingsSheet({
  visible,
  onClose,
  continuousScan,
  setContinuousScan,
  haptics,
  setHaptics,
}: Props) {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={onClose}
    >
      <View style={styles.container}>
        <Pressable
          style={styles.backdrop}
          onPress={onClose}
        />

        <View style={styles.sheet}>
          <View style={styles.handle} />

          <Text style={styles.title}>
            Scan Settings
          </Text>

          <Text style={styles.section}>
            Scanning
          </Text>

          <SettingRow
            title="Continuous Scan"
            subtitle="Keep scanning after each result"
            value={continuousScan}
            onValueChange={setContinuousScan}
          />

          <SettingRow
            title="Haptic Feedback"
            subtitle="Vibrate when a code is detected"

            value={haptics}
            onValueChange={setHaptics}
          />

          <Pressable
            style={styles.doneButton}
            onPress={onClose}
          >
            <Text style={styles.doneText}>
              Done
            </Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}

function SettingRow({
  title,
  subtitle,
  value,
  onValueChange,
}: {
  title: string;
  subtitle: string;
  value: boolean;
  onValueChange: (value: boolean) => void;
}) {
  return (
    <View style={styles.row}>
      <View style={styles.rowContent}>
        <Text style={styles.rowText}>
          {title}
        </Text>

        <Text style={styles.subtitle}>
          {subtitle}
        </Text>
      </View>

      <Switch
        value={value}
        onValueChange={onValueChange}
              trackColor={{
            false: "#475569",
          true: "#FBBF24",
  }}
        thumbColor="#FFFFFF"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },

  backdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.45)",
  },

  sheet: {
    backgroundColor: "#1E293B",
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    paddingHorizontal: 24,
    paddingTop: 12,
    paddingBottom: 28,
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
    color: "#FFFFFF",
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 20,
  },

  section: {
    color: "#94A3B8",
    fontSize: 14,
    fontWeight: "700",
    marginTop: 8,
    marginBottom: 4,
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 14,
  },

  rowContent: {
    flex: 1,
    paddingRight: 20,
  },

  rowText: {
    color: "#FFFFFF",
    fontSize: 17,
    fontWeight: "600",
  },

  subtitle: {
    color: "#94A3B8",
    fontSize: 13,
    marginTop: 3,
  },

  doneButton: {
    backgroundColor: "#FBBF24",
    borderRadius: 14,
    marginTop: 28,
    paddingVertical: 16,
  },

  doneText: {
    color: "#111827",
    textAlign: "center",
    fontWeight: "700",
    fontSize: 17,
  },
});