import SkillsItem from "./SkillsItem"
import SkillsLanguage from "./SkillsLanguage"

const Skills = () => {
    return (
        <div className='pt-[4rem] md:pt-[8rem] pb-[5rem] bg-[#09101a]'>
            <h1 className='heading'>
                Education & <span className='text-yellow-400'>Skills</span>
            </h1>
            <div className='w-[80%] mx-auto pt-[4rem] md-pt-[8rem] grid grid-cols-1 md:grid-cols-2 gap-[2rem] '>
                <div>
                    <SkillsItem title="Mern Satck developer" year="2021-2022" />
                    <SkillsLanguage
                        skill="React Js"
                        level="w-[90%]"
                    />
                    <SkillsLanguage
                        skill="Express Js "
                        level="w-[80%]"
                    />
                </div>
                <div>
                    <SkillsItem title="React developer" year="2022-2023" />
                    <SkillsLanguage
                        skill="Next Js"
                        level="w-[80%]"
                    />
                    <SkillsLanguage
                        skill="React Js"
                        level="w-[100%]"
                    />
                </div>
            </div>
        </div>
    )
}

export default Skills