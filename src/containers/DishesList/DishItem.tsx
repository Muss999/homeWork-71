import { useLocation } from "react-router-dom";
import type { TypeDishMutation } from "../../types";

interface Props {
    dish: TypeDishMutation;
}

const DishItem = ({ dish }: Props) => {
    const location = useLocation();
    const isAdmin = location.pathname.includes("/admin");
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
                {isAdmin && (
                    <div className="d-flex gap-2">
                        <button type="button" className="btn btn-warning">
                            Edit
                        </button>
                        <button type="button" className="btn btn-danger">
                            Delete
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default DishItem;
