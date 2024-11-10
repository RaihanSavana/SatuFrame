import { Head } from "@inertiajs/react";
import Navbar from "@/Layouts/Navbar";
import Footer from "@/Components/Footer";

export default function Welcome({ auth }) {
    return (
        <>
            <Head title="Photography Service - Jasa Fotografi" />
            <Navbar auth={auth.auth}></Navbar>
            <br />
            <br />
            <br />
            <br />  
            <Footer></Footer>
        </>
    );
}
