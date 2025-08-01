import { useNavigate } from "react-router-dom";
import SpinnerButton from "../Spinner/SpinnerButton";
import { useState, type ChangeEvent, type FormEvent } from "react";
import type { TypeDish } from "../../types";

interface Props {
    onSubmit: (dish: TypeDish) => void;
    isLoading?: boolean;
    isDish?: TypeDish;
    isEdit?: boolean;
}
const initialState: TypeDish = {
    name: "",
    price: 0,
    image: "",
};

const DishForm = ({
    onSubmit,
    isLoading = false,
    isDish = initialState,
    isEdit = false,
}: Props) => {
    const navigate = useNavigate();
    const [dish, setDish] = useState<TypeDish>(isDish);

    const changeDish = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;

        setDish((prevState) => ({
            ...prevState,
            [name]: name === "price" ? Number(value) : value,
        }));
    };
    const onSubmitHandler = (event: FormEvent) => {
        event.preventDefault();
        const dishName = dish.name.trim();
        const dishImage = dish.image.trim();

        if (!dishName) {
            alert("Name input is not valid");
            return;
        } else if (!dishImage) {
            alert("Image input is not valid");
            return;
        } else if (dish.price === 0) {
            alert("Price is 0!");
            return;
        }

        const newDish: TypeDish = {
            name: dishName,
            price: dish.price,
            image: dishImage,
        };
        onSubmit(newDish);
    };

    return (
        <form onSubmit={onSubmitHandler}>
            <h4>{isEdit ? "Edit dish" : "Add new dish"}</h4>
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    className="form-control"
                    value={dish.name}
                    onChange={changeDish}
                    autoFocus
                    required
                />
            </div>
            <div className="form-group mb-3">
                <label htmlFor="price">Price</label>
                <input
                    type="number"
                    name="price"
                    id="price"
                    className="form-control"
                    value={dish.price}
                    onChange={changeDish}
                    required
                />
            </div>
            <div className="form-group mb-3">
                <label htmlFor="image">Image</label>
                <input
                    type="url"
                    name="image"
                    id="image"
                    className="form-control"
                    value={dish.image}
                    onChange={changeDish}
                    required
                />
            </div>
            <div className="mb-3">
                <img
                    src={
                        dish.image ||
                        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                    }
                    alt={dish.name || "Preview"}
                    className="img-thumbnail"
                    style={{
                        width: "80px",
                        height: "80px",
                        minWidth: "80px",
                        minHeight: "80px",
                        objectFit: "cover",
                    }}
                />
            </div>

            <div className="mb-3">
                <button
                    type="submit"
                    className="btn btn-success me-2"
                    disabled={isLoading}
                >
                    {isLoading && <SpinnerButton />}
                    Save
                </button>
                <button
                    className="btn btn-secondary"
                    onClick={() => navigate("/admin/dishes")}
                >
                    Back to dishes
                </button>
            </div>
        </form>
    );
};

export default DishForm;
