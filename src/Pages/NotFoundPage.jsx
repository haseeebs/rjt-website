import { Link } from "react-router-dom"
import { MadinahImage3 } from "../assets/images"

const NotFoundPage = () => {
    return (
        <>
            <main className="relative isolate min-h-screen">
                <img
                    alt=""
                    src={MadinahImage3}
                    className="absolute inset-0 -z-10 h-full w-full object-cover object-top"
                />
                <div className="mx-auto max-w-7xl px-6 py-32 text-center sm:py-40 lg:px-8">
                    <p className="text-base font-semibold leading-8 text-white">404</p>
                    <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">Page not found</h1>
                    <p className="mt-4 text-base text-white/70 sm:mt-6">Sorry, we couldn’t find the page you’re looking for.</p>
                    <p className="text-2xl font-semibold text-gray-700"> ہم معذرت خواہ ہیں، آپ جس صفحے کی تلاش کر رہے ہیں وہ موجود نہیں ہے۔</p>
                    <div className="mt-10 flex justify-center">
                        <Link
                            to="/" className="text-sm font-semibold leading-7 text-white">
                            <span aria-hidden="true">&larr;</span> Back to home
                        </Link>
                    </div>
                </div>
            </main>
        </>
    )
}


export default NotFoundPage