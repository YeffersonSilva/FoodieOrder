import Logo from "./logo";

export const Header = () => {
    return ( 
        <header className="flex items-center justify-between">
            <section >
                <Logo/>
            </section>
            <section>Nav</section>
            <section>User</section>
        </header>
     );
}
 

