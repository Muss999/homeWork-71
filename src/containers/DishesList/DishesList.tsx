import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { deleteDish, getDishes } from "../../store/dishesThunk";
import {
    selectDeleteDishFetching,
    selectDishes,
    selectGetDishesFetching,
} from "../../store/dishesSlice";
import Spinner from "../../components/Spinner/Spinner";
import DishItem from "./DishItem";

const DishesList = () => {
    const dispatch = useAppDispatch();
    const dishes = useAppSelector(selectDishes);
    const fetchLoading = useAppSelector(selectGetDishesFetching);
    const deleteLoading = useAppSelector(selectDeleteDishFetching);

    useEffect(() => {
        dispatch(getDishes());
    }, [dispatch]);

    const removeDish = async (id: string) => {
        if (window.confirm("Do you really want to delete this dish?")) {
            await dispatch(deleteDish(id));
            await dispatch(getDishes());
        }
    };

    return (
        <>
            {fetchLoading ? (
                <Spinner />
            ) : dishes.length > 0 ? (
                <div className="d-flex gap-3 w-100 flex-wrap">
                    {dishes.map((dish) => (
                        <DishItem
                            dish={dish}
                            key={dish.id}
                            removeDish={() => removeDish(dish.id)}
                            deleteLoading={deleteLoading}
                        />
                    ))}
                </div>
            ) : (
                <div className="alert alert-warning">Dishes are empty!</div>
            )}
        </>
    );
};

export default DishesList;
