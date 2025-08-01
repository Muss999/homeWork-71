import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { useEffect } from "react";
import Spinner from "../../components/Spinner/Spinner";
import DishForm from "../../components/DishForm/DishForm";
import {
    selectEditDishFetching,
    selectOneDish,
    selectOneDishLoading,
} from "../../store/dishesSlice";
import { editDishThunk, fetchOneDish } from "../../store/dishesThunk";
import type { TypeDish } from "../../types";

const EditDish = () => {
    const { id } = useParams() as { id: string };
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const dish = useAppSelector(selectOneDish);
    const fetchOneDishLoading = useAppSelector(selectOneDishLoading);
    const editLoading = useAppSelector(selectEditDishFetching);

    useEffect(() => {
        dispatch(fetchOneDish(id));
    }, [dispatch, id]);

    const onSubmit = async (editDish: TypeDish) => {
        await dispatch(editDishThunk({ id, dish: editDish }));
        navigate("/admin/dishes/");
    };

    return (
        <div className="row mt-2">
            <div className="col-6 m-auto">
                {fetchOneDishLoading && <Spinner />}
                {dish ? (
                    <DishForm
                        onSubmit={onSubmit}
                        isLoading={editLoading}
                        isDish={dish}
                        isEdit
                    />
                ) : (
                    <div className="alert alert-warning">Dish not found!</div>
                )}
            </div>
        </div>
    );
};

export default EditDish;
