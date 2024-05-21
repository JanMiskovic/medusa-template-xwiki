import { Heading } from "@medusajs/ui";

const Hero = () => {
    return (
        <div className="h-[40vh] flex items-center justify-center border-b border-ui-border-base p-4 bg-ui-bg-subtle">
            <Heading
                level="h1"
                className="text-7xl font-serif leading-10 text-ui-fg-base font-normal"
            >
                azure storefront
            </Heading>
        </div>
    );
};

export default Hero;
