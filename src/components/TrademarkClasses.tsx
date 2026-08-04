"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { trademarkData } from "@/data/mockData";
import { ChevronDown, Box } from "lucide-react";

export default function TrademarkClasses() {
  const [showAll, setShowAll] = useState(false);
  const initialCount = 3;
  
  const displayClasses = showAll ? trademarkData.classes : trademarkData.classes.slice(0, initialCount);

  return (
    <div className="w-full">
      <motion.div 
        layout 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <AnimatePresence>
          {displayClasses.map((cls) => (
            <motion.div
              key={cls.classNum}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="bg-white border border-slate-100 p-8 rounded-3xl shadow-sm hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] hover:border-gold/20 transition-all duration-300 group cursor-default"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center mb-6 group-hover:bg-gold/10 transition-colors">
                <Box className="w-6 h-6 text-navy group-hover:text-gold transition-colors" />
              </div>
              <h4 className="font-serif text-2xl font-bold text-navy mb-2">{cls.classNum}</h4>
              <p className="text-slate-500 font-medium">{cls.desc}</p>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {trademarkData.classes.length > initialCount && (
        <div className="mt-12 text-center">
          <button 
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-slate-50 text-navy font-semibold text-sm hover:bg-slate-100 hover:text-gold transition-colors"
          >
            {showAll ? "Show Less" : "View All Classes"}
            <motion.div
              animate={{ rotate: showAll ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronDown className="w-4 h-4" />
            </motion.div>
          </button>
        </div>
      )}
    </div>
  );
}
