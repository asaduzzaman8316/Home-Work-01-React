
import Hero from './HomeComponent/Hero/Hero'
import LogoLoopHe from './LogoLoopHe'
import Card from './HomeComponent/Course/Card'

function Home() {
    const list = ["Expert in React & Next.js — We build fast, dynamic, and modern web applications.", 'Clean & Responsive Design — Focused on creating smooth, user-friendly interfaces.', ' Performance & Quality — We write efficient, scalable code following best practices.']

    const list02 = ["Innovative Culture — We encourage creativity, collaboration, and continuous learning.", 'Modern Tech Stack — Our team works with the latest technologies like React, Next.js, and cloud tools..', ' Growth-Focused Environment — We value skill development, teamwork, and delivering high-quality digital solutions.']


    return (
        <>
            <div className='2xl:container mx-auto w-[90%] text-white '>
                <Hero
                    list={list}
                    title={'Your Team'}
                    para={'We are a passionate frontend development team specializing in React and Next.js.'}
                    img={'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1184'}
                    dis={'Our focus is on building fast, modern, and user-friendly web applications with clean UI and smooth user experience. We turn ideas into responsive, high-performance digital products using the latest web technologies and best coding practices.'}
                    btnText={"Click More.."}
                />

                <Hero
                    list={list02}
                    title={'Company Environment'}
                    alignCondition={"flex-row-reverse"}
                    para={'Innovative Culture We encourage creativity, collaboration, and continuous learning.'}
                    img={'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170'}
                    dis={"We are a frontend development team at an IT Limited company. Our focus is on creating fast, modern, and responsive web applications using React and Next.js. We work in a positive and growth-focused environment where teamwork, innovation, and clean code come first."}
                    btnText={"Visite.."}
                    style={"flex-row-reverse"}
                />

            </div>
            <LogoLoopHe />
            <Card />
        </>
    )
}

export default Home
