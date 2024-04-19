import React from "react";
import "./style.scss";
let projects = [
  {
    title: "Project",
    description: "Description of your first project",
    image:
      "https://s3-alpha-sig.figma.com/img/d1c0/b02d/79ecb211852ada2c806bf41c6f2bd480?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SHA70r3qCducjKCmo4VkDkaQ3z~9jhBNEPnAijoES6r0KJ91fbA3jeGf4PmvJcL-QS-k7ypYIKjEESfklqK74-32TQPZq7E8c7vY4nyxPsMwZXrQX8H2NBChcesmYs16hjtT8tglG7IhCUw4Ze0LruP-ls41HEWVzcrldcfTwdScXKlOsVJ9xMuhsa8fPLsbWjTwRMVtFapaWaED8Rme0LQIZy9lgtqxzlcqy7bYWgB9RqTSCtVOWuKZJRutoae5n2xpPTc8L1mS3rojcwLXk67dfU4~FfprG9w68NVQfjglgWPmh4NGW-oFPknKdQJSekBQhhf3ypbl3XzyXXNw2Q__",
  },
  {
    title: "Project",
    description: "Description of your first project",
    image:
      "https://s3-alpha-sig.figma.com/img/ae8f/47d6/33e83af5f2436e177d0d029ebb01cb42?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=D4Cp2rPwGUprzUGkM6XDMk-2Q71bs4PyoGSQzoaiRI30yJi1IPB9yKbUa3QDDaYgsG0SpWbyxOK328YM8N6i8YoSy0uYobp5Boq~ia32KGGGsgdkqW508E8JEEFhvrQ7-Eh6eZty2ArdAjs52nA~NzvAghfLY3FKaYPdvI1bfI1aFAoNrWW11xaGig7YGadMsCcEfBmdpEpCAyt2Nz0r2OzsSoTrnLfAGOzmbb5XoYHpMOGOQdF~kw7t8wdQlCy84dblWNNlAHmCBxz27TNNvfi8OenDCgi5Q6irTSXNHDlWmK8Yya2pPlbOg9yJwtxZVwm2RpOe-sIGhUZPzVC7mw__",
  },
  {
    title: "Project",
    description: "Description of your first project",
    image:
      "https://s3-alpha-sig.figma.com/img/8643/c7f3/9fa8b6f280c7900bed872dcb63bce6c0?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YyHRzs648EATO1b9kMniUcWnRj3Iqk-nv5P0HH8uih333e8WX7YK5PUxDxl8mBSFnZGSOwFh8x-vbTwuYjiTqeTWy52Kw1qk5kmMfZA6fGzXiPJ3Sk2n7NH9W29uVVNddxkbrK859T3lMmGH~~KPXZGtTcih51n8cMob2ZJwtbrK2LgzSZJGvUBIGg9~0SOfZpSmVfm1C-MofXWPvzo8GlqD2CXc4iOWncUgNsJXp0OQERD8TGfbwFLXXCotLVBz37jJvbNbePYqIwuZ0Ew4Lp46iIYpR28va-3R1wuR-vA3ny64JHBBDHRJpBxUYh96N5Tg1GZrJn57etjE6~50rA__",
  },
  {
    title: "Project",
    description: "Description of your first project",
    image:
      "https://s3-alpha-sig.figma.com/img/48fb/0979/b0fbdd8e320622de39475b562ddad56d?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LjS4nNojoLxJji-pZj0O3b3A76vfwXPDhA2b18oFl0Rzws7IwsJvUdLnAzXERPTYmCzCyDJJeruokQGP4wfw~XlM2mCiaH2fa2PQuaknnjTyt5XiSJs2U~aYkNuew7VIwG10XF1yOVYda58e-~0s0r7O5I5mZJRvcHvm5O3hyXDqRoPMK8X3F1EAPgafSnXmJFnDoP4~BANfqadFufVsIgMQ8eTK8vHj8tBaFIdEx5KvWaPlaYSNbA31qgLWhMDg0m1vtG3KUgqQi~NPCLJD34AM49T~BdxkMs33l-Ep3Wb7RJj0hr9~6zVOILAf5F9iz8iNNFyNARydE2Q2BAqVAQ__",
  },
];
function Projects() {
  return (
    <section id="projects">
      <div className="row">
        {projects.map((project) => {
          return (
            <div className="col-6 pb-4">
              <div className="project">
                <img src={project.image} alt={project.title} />
                <p className="project-title">{project.title}</p>
                <p className="project-desc">{project.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Projects;
