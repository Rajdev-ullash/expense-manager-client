import React, { Fragment, useRef } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
import { createCategoryForm } from "../../helper/AuthFormHelper";
import { useAddCategoryMutation } from "../../redux/features/api/apiSlice";
import { setFormData } from "../../redux/features/form/formSlice";

const CreateCategory = () => {
  const formRef = useRef();
  const dispatch = useDispatch();
  const getFormSliceData = useSelector((state) => state.form.data);
  console.log(getFormSliceData);

  const [createCategoryFormData, { isLoading }] = useAddCategoryMutation();

  const categorySubmit = (e) => {
    e.preventDefault();
    console.log("Category Submit");
    createCategoryForm(getFormSliceData.name, getFormSliceData.icon).then(
      (res) => {
        if (res === true) {
          createCategoryFormData({
            name: getFormSliceData.name,
            icon: getFormSliceData.icon,
          })
            .unwrap()
            .then((res) => {
              if (res?.data) {
                Swal.fire({
                  icon: "success",
                  title: "Category Created Successfully!",
                  timer: 3000,
                  showConfirmButton: false,
                }).then(() => {
                  formRef.current.reset();
                });
              }
            })
            .catch((err) => {
              console.log(err);
              if (err.status === 401) {
                Swal.fire({
                  icon: "error",
                  title: "Oops...",
                  text: "You are not authorized to create category!",
                  timer: 4000,
                });
              }
            });
        }
      }
    );
  };
  return (
    <Fragment>
      {/** Create Category Form with icon field & Name filed */}
      <div className="flex justify-center items-center h-screen">
        <div className="w-[520px]">
          <div className="bg-white rounded-lg shadow-2xl p-4">
            <div className="flex justify-center items-center">
              <span className="text-2xl font-bold text-green-500">
                Create Category
              </span>
            </div>
            <form action="" ref={formRef}>
              <div className="mt-5">
                <label className="block text-green-500 text-sm font-bold mb-2">
                  Icon
                </label>
                <input
                  type="text"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Icon"
                  name="icon"
                  onBlur={(e) =>
                    dispatch(
                      setFormData({
                        name: e.target.name,
                        value: e.target.value,
                      })
                    )
                  }
                />
              </div>
              <div className="mt-5">
                <label className="block text-green-500 text-sm font-bold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Name"
                  name="name"
                  onBlur={(e) =>
                    dispatch(
                      setFormData({
                        name: e.target.name,
                        value: e.target.value,
                      })
                    )
                  }
                />
              </div>
              <div className="mt-5">
                {isLoading ? (
                  <button
                    type="submit"
                    className="bg-green-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                    disabled
                  >
                    Creating...
                  </button>
                ) : (
                  <button
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-full"
                    onClick={(e) => categorySubmit(e)}
                  >
                    Create
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default CreateCategory;
