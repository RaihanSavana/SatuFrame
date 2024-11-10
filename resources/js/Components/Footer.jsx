export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-10">
            <div className="border-t border-gray-700 mt-8 pt-6 pl-8 text-left">
                <p className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} SatuFrame. All rights reserved.</p>
            </div>
        </footer>
    );
}
