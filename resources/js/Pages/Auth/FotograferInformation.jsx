import { Head, useForm } from "@inertiajs/react";
import Navbar from "@/Layouts/Navbar";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";

export default function FotograferInformation({ auth }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        spesialisasi: [],
        portofolio: [],
        foto_profil: "",
        deskripsi: "",
        kota: "",
        floor_price: "",
    });

    const storeInformation = (e) => {
        e.preventDefault();
        post(route("fotografer.store.information"), {
            onSuccess: reset(),
        });
    };

    const handleFileChange = (e) => {
        setData("portofolio", Array.from(e.target.files));
    };

    const handleCheckboxChange = (e) => {
        const { value, checked } = e.target;
        if (checked) {
            setData("spesialisasi", [...data.spesialisasi, value]);
        } else {
            setData("spesialisasi", data.spesialisasi.filter((item) => item !== value));
        }
    };

    return (
        <>
            <Head title="Fotografer Information" />
            <Navbar auth={auth.auth}></Navbar>
            <div className="container mx-auto px-40 py-6">
                <form onSubmit={storeInformation}>
                    <div>
                        <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                            Add Photographer Information
                        </h2>
                        <br />
                        <InputLabel htmlFor="spesialisasi" value="Specialization" />
                        <div className="flex flex-wrap gap-4">
                            {["Wedding", "Portrait", "Commercial", "Event"].map((specialty) => (
                                <label key={specialty} className="flex items-center">
                                    <input
                                        type="checkbox"
                                        value={specialty}
                                        onChange={handleCheckboxChange}
                                        checked={data.spesialisasi.includes(specialty)}
                                    />
                                    <span className="ml-2">{specialty}</span>
                                </label>
                            ))}
                        </div>
                        <InputError message={errors.spesialisasi} className="mt-2" />
                    </div>
                    <br />

                    <InputLabel htmlFor="portofolio" value="Portfolio Files" />
                    <input
                        id="portofolio"
                        name="portofolio"
                        type="file"
                        multiple
                        className="mt-1 block w-full"
                        onChange={handleFileChange}
                        required
                    />
                    <InputError message={errors.portofolio} className="mt-2" />
                    <br />

                    <InputLabel htmlFor="foto_profil" value="Profile Picture" />
                    <label htmlFor="foto_profil" className="cursor-pointer block mt-1 w-full text-gray-800 border border-gray-300 rounded-md py-2 px-3 bg-white hover:bg-gray-50 focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200">
                        <span className="block truncate">{data.foto_profil ? data.foto_profil.name : "Choose a file"}</span>
                        <input
                            id="foto_profil"
                            name="foto_profil"
                            type="file"
                            className="hidden"
                            onChange={(e) => setData("foto_profil", e.target.files[0])}
                            required
                        />
                    </label>
                    <InputError message={errors.foto_profil} className="mt-2" />
                    <br />

                    <InputLabel htmlFor="deskripsi" value="Description" />
                    <TextInput
                        id="deskripsi"
                        name="deskripsi"
                        value={data.deskripsi}
                        className="mt-1 block w-full"
                        onChange={(e) => setData("deskripsi", e.target.value)}
                        required
                    />
                    <InputError message={errors.deskripsi} className="mt-2" />
                    <br />

                    <InputLabel htmlFor="kota" value="City" />
                    <TextInput
                        id="kota"
                        name="kota"
                        value={data.kota}
                        className="mt-1 block w-full"
                        onChange={(e) => setData("kota", e.target.value)}
                        required
                    />
                    <InputError message={errors.kota} className="mt-2" />
                    <br />

                    <InputLabel htmlFor="floor_price" value="Floor Price" />
                    <TextInput
                        id="floor_price"
                        name="floor_price"
                        type="number"
                        value={data.floor_price}
                        className="mt-1 block w-full"
                        onChange={(e) => setData("floor_price", e.target.value)}
                        required
                    />
                    <InputError message={errors.floor_price} className="mt-2" />
                    <br />

                    <div className="flex items-center justify-end mt-4">
                        <PrimaryButton className="ms-4 bg-green-500" disabled={processing}>
                            Submit
                        </PrimaryButton>
                    </div>
                </form>
            </div>
        </>
    );
}
