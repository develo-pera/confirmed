import { AnimatePresence, motion } from "framer-motion"
import { FieldError } from "react-hook-form";

const InputError = ({ error }: { error: FieldError | undefined }) => {
  return (
    <AnimatePresence initial={false} mode="wait">
      {error && <motion.p className="text-red-500 text-sm" initial={{ opacity: 0, height: 0, marginBottom: 0 }} animate={{ opacity: 1, height: "auto", marginBottom: 8 }} exit={{ opacity: 0, height: 0, marginBottom: 0 }}>{error.message}</motion.p>}
    </AnimatePresence>
  );
}

export default InputError;