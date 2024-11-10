export default function Footer() {
    return (
        <footer className=" text-white py-">
            <div className="bg-gray-900 border-t border-gray-700 mt-8 pt-6 pl-8 text-left">
                <p className="text-gray-500 text-sm pb-5">&copy; {new Date().getFullYear()} SatuFrame. All rights reserved.</p>
            </div>
        </footer>
    );
}
