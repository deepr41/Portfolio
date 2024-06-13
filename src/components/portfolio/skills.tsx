type SkillsType = {
  skills?: string[];
};

const Skills = (props: SkillsType) => {
  const { skills } = props;
  return (
    <>
      <div className="bg-gray-100 px-6 py-4 dark:bg-black">
        <div className="mb-2 text-2xl font-bold">Skills</div>
        <div className="flex flex-row flex-wrap gap-2">
          {skills &&
            skills.map((item, index) => (
              <div
                key={`${item}-${index}`}
                className="cursor-default bg-blue-950 p-2 font-mono text-sm text-white transition hover:scale-110 hover:bg-blue-950 dark:bg-blue-950/50 dark:hover:scale-95"
              >
                {item}
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Skills;