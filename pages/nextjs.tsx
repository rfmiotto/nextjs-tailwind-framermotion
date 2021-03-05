import Link from 'next/link';
import { motion } from 'framer-motion';

const NextPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
      <motion.img 
        src="/img/nextjs.svg" 
        layoutId="nextjs-logo"
      />

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.25, duration: 1 }}
      >
        <Link href="/">
          <a className="bg-gray-900 text-gray-50 px-6 py-3 text-lg font-semibold rounded-xl hover:bg-gray-700 transition">
            Return to Homepage
          </a>
        </Link>
      </ motion.div>
    </div>
  )
}

export default NextPage