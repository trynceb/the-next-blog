import React from "react";

const Footer = () => {
    return (
        <footer className="bg-wh-900 text-wh-50 py-10 px-10">
            <div className="justify-between mx-auto gap-16 sm:flex">
                {/* FIRST COLUMN */}
                <div className="mt-16 basis-1/2 sm:mt-0">
                    <h4 className="font-bold">COLLECTING QUALITY</h4>
                    <p className="my-5">
                        Write a random footer desciption here?
                    </p>
                    <p>
                        © Collecting Quality All Rights Resered.
                    </p>
                </div>
                {/* SECOND COLUMN */}
                <div className="mt-16 basis-1/4 sm:mt-0">
                    <h4 className="font-bold">Links</h4>
                    <p className="my-5">Random link here</p>
                    <p className="my-5">Another random link here</p>
                    <p>One last link to something cool</p>
                </div>
                {/* THIRD COLUMN */}
                <div className="mt-16 basis-1/4 sm:mt-0">
                    <h4 className="font-bold">Contact Us</h4>
                    <p className="my-5">randomemail@email.com</p>
                    <p>(890) 567-1234</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer