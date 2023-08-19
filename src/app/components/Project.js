import Image from "next/image"
import proj from "@/project_pic/proj.jpg"
import proj1 from '../../../public/proj1.PNG'
import proj2 from '../../../public/proj2.PNG'
import proj3 from '../../../public/proj3.PNG'

const Project = () => {
  return (
    <div className="grid bg-white h-full gap-10 lg:mt-20 content-center justify-items-center text-center lg:px-32 md:px-16 md:mb-20 sm:px-10 sm:mb-20">
         <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
    PROJECTS
      </h1>


    <div className="grid grid-cols-2 gap-5 py-5">
        <Image src={proj1} alt="project" width={500} height={500} priority={false} className="w-full h-auto" rounded-xl/>
        <div className="flex flex-col justify-center">
    <h1 className="text-xl font-bold">Title</h1>
    <p className="text-1xl font-medium text-gray-900 dark:text-white">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum tempore nulla labore dolores nesciunt modi doloribus magni dicta illo est quis iure corrupti, aspernatur reiciendis magnam natus pariatur, odit rerum iusto corporis! Modi obcaecati tenetur quisquam possimus quis temporibus nostrum adipisci. Provident, tempora placeat! Omnis ipsam nam inventore? Nulla, corporis.</p>
        </div>
    </div>



    <div className="grid grid-cols-2 gap-5 py-5">
        <div className="flex flex-col justify-center">
    <h1 className="text-xl font-bold">Title</h1>
    <p className="text-1xl font-medium text-gray-900 dark:text-white">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum tempore nulla labore dolores nesciunt modi doloribus magni dicta illo est quis iure corrupti, aspernatur reiciendis magnam natus pariatur, odit rerum iusto corporis! Modi obcaecati tenetur quisquam possimus quis temporibus nostrum adipisci. Provident, tempora placeat! Omnis ipsam nam inventore? Nulla, corporis.</p>
        </div>
        <Image src={proj2} alt="project" width={500} height={500} priority={false} className="w-full h-auto rounded-xl"/>
    </div>





    <div className="grid grid-cols-2 gap-5 py-5">
        <Image src={proj3} alt="project" width={500} height={500} priority={false} className="w-full h-auto rounded-xl"/>
        <div className="flex flex-col justify-center">
    <h1 className="text-xl font-bold">Title</h1>
    <p className="text-1xl font-medium text-gray-900 dark:text-white">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum tempore nulla labore dolores nesciunt modi doloribus magni dicta illo est quis iure corrupti, aspernatur reiciendis magnam natus pariatur, odit rerum iusto corporis! Modi obcaecati tenetur quisquam possimus quis temporibus nostrum adipisci. Provident, tempora placeat! Omnis ipsam nam inventore? Nulla, corporis.</p>
        </div>
    </div>
  </div>
  )
}

export default Project