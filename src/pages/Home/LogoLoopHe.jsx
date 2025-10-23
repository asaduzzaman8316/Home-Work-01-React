import LogoLoop from './LogoLoop';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss } from 'react-icons/si';

const techLogos = [
    { node: <SiReact />, title: "React", href: "https://react.dev" },
    { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
    { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
    { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
];

// Alternative with image sources
// const imageLogos = [
//     { src: "https://substackcdn.com/image/fetch/$s_!G1lk!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8ed3d547-94ff-48e1-9f20-8c14a7030a02_2000x2000.jpeg", alt: "Apple", href: "https://www.apple.com" },
//     { src: "/logos/microsoft.png", alt: "Microsoft", href: "https://www.microsoft.com" },
//     { src: "/logos/google.png", alt: "Google", href: "https://www.google.com" },
//     { src: "/logos/amazon.png", alt: "Amazon", href: "https://www.amazon.com" },
//     { src: "/logos/meta.png", alt: "Meta", href: "https://about.facebook.com" },
//     { src: "/logos/tesla.png", alt: "Tesla", href: "https://www.tesla.com" },
//     { src: "/logos/nvidia.png", alt: "NVIDIA", href: "https://www.nvidia.com" },
//     { src: "/logos/ibm.png", alt: "IBM", href: "https://www.ibm.com" },
//     { src: "/logos/intel.png", alt: "Intel", href: "https://www.intel.com" },
//     { src: "/logos/oracle.png", alt: "Oracle", href: "https://www.oracle.com" }
// ];

function LogoLoopHe() {
    return (
        <div style={{ height: '150px', position: 'relative', overflow: 'hidden' , width:'100%' , color:"white" }}>
            <LogoLoop
                logos={techLogos}
                speed={120}
                direction="left"
                logoHeight={48}
                gap={40}
                pauseOnHover
                scaleOnHover
                fadeOut
                fadeOutColor="#ffffff"
                ariaLabel="Technology partners"
            />
        </div>
    );
}

export default LogoLoopHe