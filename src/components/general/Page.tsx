import { ReactNode } from "react"

const Page = ({ children }: { children: ReactNode }) => {
    return (
        <div className='h-full bg-cyan-200'>
            {children}
        </div>
    )
}

export default Page