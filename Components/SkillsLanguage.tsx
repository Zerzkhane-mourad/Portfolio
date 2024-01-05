
interface Props {

  skill: string;
  level: string;
}

const SkillsLanguage = ({ level, skill }: Props) => {
  return (
    <div className="relative mb-[1rem]">
      <h1 className="p-5 w-[100%] bg-gray-800 rounded-sm text-white text-[20px] font-bold">
        {skill}
      </h1>
      <span className={`absolute ${level} bottom-0 h-[6px] bg-[#55e6a5]`} >
      </span>
    </div>
  )
}

export default SkillsLanguage