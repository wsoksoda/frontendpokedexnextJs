import { motion } from "framer-motion";
import React from "react";

export const MotionSmall = ({ children }: { children?: React.ReactNode }) => (
  <motion.div whileHover={{ scale: 1.2 }}>{children}</motion.div>
);

export const MotionBig = ({ children }: { children?: React.ReactNode }) => (
  <motion.div whileHover={{ scale: 1.5 }}>{children}</motion.div>
);
