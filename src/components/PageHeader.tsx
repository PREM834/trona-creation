import { useNavigate, useLocation } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

interface PageHeaderProps {
  title: string;
  description?: string;
}

export default function PageHeader({ title, description }: PageHeaderProps) {
  const location = useLocation();
  const navigate = useNavigate();
  const previousPath = location.state?.from || "/";

  const handleBack = () => {
    if (previousPath.startsWith("/#")) {
      navigate("/", { state: { scrollTo: previousPath.substring(2) } });
    } else {
      navigate(previousPath);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <button
        onClick={handleBack}
        className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8 hover:-translate-x-1 transition-transform"
      >
        <ArrowLeft className="w-5 h-5 mr-2" />
        Back
      </button>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h1 className="section-title">{title}</h1>
        {description && (
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {description}
          </p>
        )}
      </motion.div>
    </div>
  );
}
