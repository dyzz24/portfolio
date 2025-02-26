import React from 'react'
import './about.scss'
import { IWithRefChildren } from '../index'

export const AboutSection: React.FC<IWithRefChildren> = ({ refElement }) => {
    return (
        <section className="about" ref={refElement}>
            <h2>About me</h2>
            <div className="about__wrapper">
                <div className="about__text">
                    <div className="about__text_body">
                        <span className="line_l"></span>
                        <div className="text_block">
                            <span>
                                I am a dedicated Frontend Developer with 6+
                                years of experience in building dynamic,
                                scalable, and user-friendly web applications.
                                Proficient in React and Angular, I have
                                experience developing robust solutions and
                                optimizing user experiences. I am also ready to
                                work with modern Angular, leveraging my
                                expertise in the framework.
                            </span>
                            <span>
                                I specialize in TypeScript, React, React Router,
                                Next.js, Redux Toolkit, Effector, and Apollo
                                GraphQL. I ensure high code quality by writing
                                tests with Jest and React Testing Library,
                                maintaining over 80% test coverage
                            </span>
                            <span>
                                My skill set includes CSS preprocessors (SCSS),
                                PCSS, and CSS-in-JS libraries (Styled
                                Components), along with experience using build
                                tools like Webpack and Vite.
                            </span>
                            <span>
                                I actively incorporate AI tools like GitHub
                                Copilot and ChatGPT to streamline development,
                                improve efficiency, and optimize workflows.
                                Additionally, I develop library packages with
                                reusable components, such as react-tree-select
                                and react-toaster. Feel free to contact me via
                                Telegram: @VDmitry24.
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
