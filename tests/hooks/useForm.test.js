import { act, renderHook } from "@testing-library/react";
import { useForm } from "../../src/hooks/useForm";

describe("Pruebas en useForm", () => {
  const initialForm = {
    name: "daniel",
    email: "daniel@mail.com",
  };

  test("debe de regresar la informacion por defecto", () => {
    const { result } = renderHook(() => useForm(initialForm));
    expect(result.current).toEqual({
      formState: initialForm,
      onInputChange: expect.any(Function),
      name: initialForm.name,
      email: initialForm.email,
      onResetForm: expect.any(Function),
    });
  });

  test("debe de cambiar el nombre del formulario", () => {
    const newValue = "juan";
    const { result } = renderHook(() => useForm(initialForm));
    const { onInputChange } = result.current;
    act(() => {
      onInputChange({
        target: { name: "name", value: newValue },
      });
    });
    expect(result.current.name).toBe(newValue);
    expect(result.current.formState.name).toBe(newValue);
  });
  
  test("debe de resetear los valores del formulario", () => {
    const newValue = "juan";
    const { result } = renderHook(() => useForm(initialForm));
    const { onResetForm, onInputChange } = result.current;
    act(() => {
      onInputChange({
        target: { name: "name", value: newValue },
      });
      onResetForm();
    });
    expect(result.current.name).toBe(initialForm.name);
    expect(result.current.formState.name).toBe(initialForm.name);
  });
});
