import { educationFactors } from "@/data/education-factor";
import { motion } from "motion/react";

export const EducationFactors = () => {
  return (
    <div className="grid md:grid-cols-2 gap-4 mt-4">
      {educationFactors.map((item, index) => (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          key={index}
          className="flex gap-4 "
        >
          <div>
            <div
              className="size-[50px] border-2 rounded-full p-2 flex transition-colors 
                    justify-center items-center hover:bg-primary hover:text-white"
            >
              {item.icon}
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-gray-500">{item.title}</h3>
            <div className="w-[70px] h-[2px] bg-gray-400"></div>
            <p className="text-sm text-gray-500">{item.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};
