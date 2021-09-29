import React, { useContext } from "react";
import { View, Text } from "react-native";
import { ActivityIndicator, Colors } from "react-native-paper";
import { useForm, Controller } from "react-hook-form";
import * as EmailValidator from "email-validator";
import { LoginCover } from "components/LoginCover";
import { TextInput, Button } from "components/Common";
import { AuthenticationContext } from "contexts/AuthenticationContext";
import { tw } from "config/tailwind";
import { Props, InputProps } from "./props";

const RegisterScreen: React.FC<Props> = ({ navigation }) => {
  const { onUserRegister, error, isLoading } = useContext(
    AuthenticationContext
  );
  const {
    control,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (values: InputProps) => {
    onUserRegister(values.email, values.password);
  };

  const renderErrorMessage = (field: string, err) => {
    const fieldError = err?.[field];

    if (fieldError.type === "validate") {
      return <Text style={tw("text-red-600 mt-1")}>{`Invalid ${field}`}</Text>;
    }
    return <Text style={tw("text-red-600 mt-1")}>{fieldError?.message}</Text>;
  };

  return (
    <LoginCover onBackPress={() => navigation.goBack()}>
      <View style={tw("mb-4 w-full")}>
        <Controller
          control={control}
          name="email"
          rules={{
            required: { value: true, message: "Please enter email" },
            validate: (value) => EmailValidator.validate(value),
          }}
          render={({ field: { onChange, value } }) => (
            <TextInput
              autoCapitalize="none"
              placeholder="Enter email"
              value={value}
              className="h-12"
              keyboardType="email-address"
              onChangeText={(val) => onChange(val)}
            />
          )}
        />
        {errors?.email && renderErrorMessage("email", errors)}
      </View>

      <View style={tw("w-full mb-4")}>
        <Controller
          control={control}
          name="password"
          rules={{
            required: { value: true, message: "Please enter password" },
          }}
          render={({ field: { onChange, value } }) => (
            <TextInput
              secureTextEntry
              autoCapitalize="none"
              textContentType="password"
              placeholder="Enter password"
              value={value}
              className="h-12"
              onChangeText={(val) => onChange(val)}
            />
          )}
        />
        {errors?.password && renderErrorMessage("password", errors)}
      </View>

      <View style={tw("w-full")}>
        <Controller
          control={control}
          name="confirmPassword"
          rules={{
            required: { value: true, message: "Please confirm password" },
            validate: (value) => value === getValues("password"),
          }}
          render={({ field: { onChange, value } }) => (
            <TextInput
              secureTextEntry
              autoCapitalize="none"
              textContentType="password"
              placeholder="Enter password again"
              value={value}
              className="h-12"
              onChangeText={(val) => onChange(val)}
            />
          )}
        />
        {errors?.password && renderErrorMessage("confirmPassword", errors)}
      </View>

      {error && <Text style={tw("text-red-600 mt-2")}>{error}</Text>}

      {!isLoading ? (
        <Button
          block
          center
          label="Register"
          wrapperClassName="mt-3 h-10"
          touchableClassName="bg-primary"
          labelClassName="text-white"
          onPress={handleSubmit(onSubmit)}
        />
      ) : (
        <ActivityIndicator animating color={Colors.blue300} />
      )}
    </LoginCover>
  );
};

export const Register = RegisterScreen;
export default Register;
