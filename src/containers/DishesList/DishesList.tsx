import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { getDishes } from "../../store/dishesThunk";
import { selectDishes, selectGetDishesFetching } from "../../store/dishesSlice";
import Spinner from "../../components/Spinner/Spinner";
import DishItem from "./DishItem";

const DishesList = () => {
    const dispatch = useAppDispatch();
    const dishes = useAppSelector(selectDishes);
    const fetchLoading = useAppSelector(selectGetDishesFetching);

    useEffect(() => {
        dispatch(getDishes());
    }, [dispatch]);

    return (
        <>
            {fetchLoading ? (
                <Spinner />
            ) : dishes.length > 0 ? (
                <div className="d-flex gap-3 w-100">
                    {dishes.map((dish) => (
                        <DishItem dish={dish} key={dish.id} />
                    ))}
                </div>
            ) : (
                <div className="alert alert-warning">Dishes are empty!</div>
            )}
        </>
    );
};

export default DishesList;
