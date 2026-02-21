
const ProjectCard = () => {
    return (
        <div className="projects-card flex">
            <div className="project-img "></div>
            <div className="h-full w-full px-8 py-12">
                <h3>Lorem, ipsum dolor.</h3>
                <p className="my-3">
Lorem ipsum dolor sit amet consectetur adipisicing elit. At, sint minima libero a ducimus dolore maxime ullam, provident necessitatibus mollitia quia enim officiis commodi. Odio corporis repellendus quidem voluptas, illum molestias quaerat laboriosam dolore vero culpa nisi velit reprehenderit! Similique nemo numquam odit fuga doloremque quas, totam ipsam quia in animi, molestias maxime, quos repellendus optio corporis atque laudantium fugiat asperiores inventore deleniti sed minima saepe amet veniam? Voluptates eaque consequuntur unde nulla iure totam pariatur dolorum excepturi alias ipsum?
                </p>
                <div className="flex my-3  px-1 py-3 gap-1">

                {[0,1,2,3,4].map((_e,i)=>(
                    <div className="h-12 aspect-square rounded-full border border-gray-800" key={i}></div>
                ))}
                </div>
                <div className="h-max w-full flex justify-end pb-5 px-5 gap-4">
                    <button className="button-black">Details</button><button className="button-blue">Visit</button>

                </div>
            </div>
        </div>
    )
}

export default ProjectCard;