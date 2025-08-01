import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { selectAddDishesFetching } from "../../store/dishesSlice";
import type { TypeDish } from "../../types";
import { addDish } from "../../store/dishesThunk";
import DishForm from "../../components/DishForm/DishForm";

const AddDish = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const addDishLoading = useAppSelector(selectAddDishesFetching);

    const onSubmit = async (dish: TypeDish) => {
        await dispatch(addDish(dish));
        navigate("/admin/dishes");
    };
    return (
        <div className="row mt-2">
            <div className="col-6 m-auto">
                <DishForm onSubmit={onSubmit} isLoading={addDishLoading} />
            </div>
        </div>
    );
};

export default AddDish;
