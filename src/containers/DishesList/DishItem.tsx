import { useLocation, useNavigate, type Location } from "react-router-dom";
import type { TypeDishMutation } from "../../types";
import SpinnerButton from "../../components/Spinner/SpinnerButton";
import type { MouseEventHandler } from "react";

interface Props {
    dish: TypeDishMutation;
    removeDish: MouseEventHandler;
    deleteLoading: boolean | string;
    addToCart: MouseEventHandler;
}

const DishItem = ({ dish, removeDish, deleteLoading, addToCart }: Props) => {
    const location: Location = useLocation();
    const isAdmin = location.pathname.includes("/admin");
    const navigate = useNavigate();

    return (
        <div className="d-flex align-items-center border p-3 rounded justify-content-between w-100">
            <div className="d-flex gap-4 align-items-center">
                <img
                    src={dish.image}
                    alt={dish.name}
                    className="img-thumbnail"
                    style={{
                        width: "80px",
                        height: "80px",
                        objectFit: "cover",
                    }}
                />
                <strong>{dish.name}</strong>
            </div>
            <div className="d-flex gap-5 justify-content-between align-items-center">
                <strong>{dish.price} KGS</strong>

                {isAdmin ? (
                    <div className="d-flex gap-2">
                        <button
                            type="button"
                            className="btn btn-warning"
                            onClick={() =>
                                navigate(`/admin/dishes/${dish.id}/edit`)
                            }
                        >
                            Edit
                        </button>
                        <button
                            type="button"
                            className="btn btn-danger"
                            onClick={removeDish}
                            disabled={
                                deleteLoading
                                    ? deleteLoading === dish.id
                                    : false
                            }
                        >
                            {deleteLoading && deleteLoading === dish.id && (
                                <SpinnerButton />
                            )}
                            Delete
                        </button>
                    </div>
                ) : (
                    <button
                        type="button"
                        className="btn btn-success"
                        onClick={addToCart}
                    >
                        Add to cart
                    </button>
                )}
            </div>
        </div>
    );
};

export default DishItem;
