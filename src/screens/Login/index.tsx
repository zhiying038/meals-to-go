import React, { useContext } from "react";
import { View, Text } from "react-native";
import { ActivityIndicator, Colors } from "react-native-paper";
import { useForm, Controller } from "react-hook-form";
import { LoginCover } from "components/LoginCover";
import { TextInput, Button } from "components/Common";
import { tw } from "config/tailwind";
import { InputProps, Props } from "./props";
import { AuthenticationContext } from "contexts/AuthenticationContext";

const LoginScreen: React.FC<Props> = ({ navigation }) => {
  const { onUserLogin, isLoading, error } = useContext(AuthenticationContext);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (values: InputProps) => {
    onUserLogin(values.email, values.password);
  };

  const renderErrorMesssage = (field: string, err) => {
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
              autoCapitalize="none"
              className="h-12"
              textContentType="emailAddress"
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
              secureTextEntry
              textContentType="password"
              placeholder="Enter password"
              autoCapitalize="none"
              value={value}
              className="h-12"
              onChangeText={(val) => onChange(val)}
            />
          )}
        />
        {errors?.password && renderErrorMesssage("password", errors)}
      </View>

      {error && <Text style={tw("text-red-600 mt-2")}>{error}</Text>}

      {!isLoading ? (
        <Button
          block
          center
          label="Login"
          wrapperClassName="mt-3 h-10"
          touchableClassName="bg-primary"
          labelClassName="text-white"
          onPress={handleSubmit(onSubmit)}
        />
      ) : (
        <ActivityIndicator
          animating
          color={Colors.blue300}
          style={tw("mt-3")}
        />
      )}
    </LoginCover>
  );
};

export const Login = LoginScreen;
export default Login;
