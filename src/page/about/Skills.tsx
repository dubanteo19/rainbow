import { motion } from "motion/react";

type Skill = {
  name: string;
  score: number;
};
export const Skills = () => {
  const skills: Skill[] = [
    { name: "listening", score: 90 },
    { name: "speaking", score: 96 },
    { name: "reading", score: 94 },
    { name: "writing", score: 87 },
  ];
  return (
    <div className="mt-10">
      <h3 className="text-center text-white">OUR SKILLS</h3>
      <p className="text-gray-200 text-sm text-center">Where knowledge meets leadership.</p>
      <div className="space-y-4 text-white mt-4">
        {skills.map((skill, index) => (
          <div key={index}>
            <div className="flex justify-between">
              <span className="text-sm uppercase">{skill.name}</span>
              <span>{skill.score}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <motion.div
                initial={{width:0}}
                className="bg-primary h-3 rounded-full"
                whileInView={{ width: `${skill.score}%` }}
                transition={{duration:1,ease:"easeInOut", delay:index*0.2}}
                viewport={{once:true,amount:0.3}}
              ></motion.div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
