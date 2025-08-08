import { motion } from "motion/react";
import CountUp from "react-countup";

type Fact = {
  name: string;
  count: number;
};
export const Facts = () => {
  const facts: Fact[] = [
    { name: "students", count: 326 },
    { name: "teachers", count: 7 },
    { name: "class rooms", count: 7 },
    { name: "year of experience", count: 11 },
  ];
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 divide-y-2 divide-x-2 divide-white">
      {facts.map((fact, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className="bg-primary text-center text-secondary py-4 px-2"
        >
          <p className="text-4xl ">
            <CountUp
              duration={3}
              end={fact.count}
              enableScrollSpy
              scrollSpyOnce
            />
          </p>
          <p className="text  text-sm uppercase">{fact.name}</p>
        </motion.div>
      ))}
    </div>
  );
};
