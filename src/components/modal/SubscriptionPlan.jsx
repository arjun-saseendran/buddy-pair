import React from "react";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    IconButton,
    Typography,
} from "@material-tailwind/react";
import {FaRegImage} from "react-icons/fa";

export const SubscriptionPlan = () => {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => setOpen((cur) => !cur);

    return (
        <>
            <Button onClick={handleOpen}>Connect Wallet</Button>
            <Dialog size="xs" open={open} handler={handleOpen}>
                <DialogHeader className="justify-between">
                    <div>
                        <Typography
                            className=" text-base text-center md:text-3xl p-5"
                            variant="h5"
                            color="blue-gray"
                        >
                            Subscription Plan
                        </Typography>
                    </div>
                    <IconButton
                        color="blue-gray"
                        size="sm"
                        variant="text"
                        onClick={handleOpen}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                            className="h-5 w-5"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </IconButton>
                </DialogHeader>
                <DialogBody className="overflow-hidden !px-5">
                    <div className="flex flex-col items-center space-y-4 md:space-y-8 mb-6">
                        <div>
                            <input
                                className="text-black pl-4 outline-none text-sm placeholder-gray-400  font-thin border border-gray-300
               rounded-lg px-20 py-2"
                                type="text"
                                placeholder="Name"
                            />
                        </div>
                        <div>
                            <input
                                className="text-black pl-4 outline-none text-sm placeholder-gray-400  font-thin border border-gray-300
               rounded-lg px-20 py-2"
                                type="text"
                                placeholder="Price"
                            />
                        </div>
                        <div>
                            <input
                                className="text-black pl-4 outline-none text-sm placeholder-gray-400  font-thin border border-gray-300
               rounded-lg px-20 py-2"
                                type="text"
                                placeholder="Duration"
                            />
                        </div>
                        <div>
                            <input
                                className="text-black pl-4 outline-none text-sm placeholder-gray-400  font-thin border border-gray-300
               rounded-lg px-20 py-2"
                                type="text"
                                placeholder="Currency"
                            />
                        </div>

                        <div>
                            <select
                                className="text-gray-400 pl-4 outline-none text-sm placeholder-gray-400 font-thin border border-gray-300
               rounded-lg px-24 py-2 "
                            >
                                <option value="" disabled selected>
                                    Subscription Type
                                </option>
                                <option value="movies">Movies</option>
                                <option value="sports">Sports</option>
                                <option value="arts">Arts</option>
                            </select>
                        </div>

                        <div className="relative">
                            <input
                                id="fileUpload"
                                type="file"
                                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                            />

                            <label
                                htmlFor="fileUpload"
                                className="text-gray-400 outline-none text-sm pl-4 placeholder-black font-thin border border-gray-300
         rounded-lg px-[185px] py-2 cursor-pointer block"
                            >
                                Image
                            </label>

                            <span
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gary-400 cursor-pointer">
                <FaRegImage className="w-5 h-5"/>
              </span>
                        </div>
                        <div>
              <textarea
                  className="text-black pl-4 outline-none text-sm placeholder-gray-400  font-thin border border-gray-300
               rounded-lg px-[80px] py-2"
                  type="text"
                  placeholder="Description"
              />
                        </div>
                        <div className="ms-10">
                            <div className="flex gap-4 ">
                                <Button color="red" className=" px-4 py-2 md:px-6 md:py-3 ">
                                    Save
                                </Button>
                                <Button color="black" className=" px-4 py-2 md:px-6 md:py-3 ">
                                    Cancel
                                </Button>
                            </div>
                        </div>
                    </div>
                </DialogBody>
            </Dialog>
        </>
    );
};
