import React, { ReactNode } from "react";
import { View, Text } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { LoginCover } from "components/LoginCover";
import { TextInput, Button } from "components/Common";
import { tw } from "config/tailwind";
import { InputProps, Props } from "./props";

const LoginScreen: React.FC<Props> = ({ navigation }) => {
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
    <LoginCover onBackPress={() => navigation.goBack()}>
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

      <Button
        block
        center
        label="Login"
        wrapperClassName="mt-3 h-10"
        touchableClassName="bg-primary"
        labelClassName="text-white"
        onPress={handleSubmit(onSubmit)}
      />
    </LoginCover>
  );
};

export const Login = LoginScreen;
export default Login;
