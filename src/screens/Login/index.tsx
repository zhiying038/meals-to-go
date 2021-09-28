import React, { ReactNode } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { LoginCover } from "components/LoginCover";
import { TextInput } from "components/Common";
import { tw } from "config/tailwind";
import { InputProps } from "./props";

const LoginScreen: React.FC = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (values: InputProps) => {
    console.log(values);
  };

  const renderErrorMesssage = (field: string, err): ReactNode => {
    const fieldError = err?.[field];
    return <Text style={tw("text-red-600 mt-1")}>{fieldError?.message}</Text>;
  };

  return (
    <LoginCover>
      <View style={tw("mb-4 w-full")}>
        <Controller
          control={control}
          name="email"
          rules={{ required: { value: true, message: "Please enter email" } }}
          render={({ field: { onChange, value } }) => (
            <TextInput
              placeholder="Enter email"
              value={value}
              className="h-12"
              keyboardType="email-address"
              onChangeText={(val) => onChange(val)}
            />
          )}
        />
        {errors?.email && renderErrorMesssage("email", errors)}
      </View>

      <View style={tw("w-full")}>
        <Controller
          control={control}
          name="password"
          rules={{
            required: { value: true, message: "Please enter password" },
          }}
          render={({ field: { onChange, value } }) => (
            <TextInput
              placeholder="Enter password"
              value={value}
              className="h-12"
              onChangeText={(val) => onChange(val)}
            />
          )}
        />
        {errors?.password && renderErrorMesssage("password", errors)}
      </View>

      <TouchableOpacity onPress={handleSubmit(onSubmit)} style={tw("mt-4")}>
        <Text>Login</Text>
      </TouchableOpacity>
    </LoginCover>
  );
};

export const Login = LoginScreen;
export default Login;
