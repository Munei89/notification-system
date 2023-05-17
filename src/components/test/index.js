import React, { useState } from "react";
import {
  FormWrapper,
  FormTitle,
  FormContainer,
  Form,
  FormHolder,
  Line,
  ButtonWrapper,
} from "./styles";
import Input from "../Input";
import Button from "../Button";
import { useNotifications } from "./../NotificationsProvider";
import { MainLayout } from "../../layouts";

export function Test() {
  const { notify, clearNotifications } = useNotifications();

  const [value, setValue] = useState({
    timeoutSeconds: 0,
    message: "A message",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValue((prev) => ({ ...prev, [name]: value }));
  };

  const category = () => {
    const categories = ["success", "info", "error"];
    const index = Math.floor(Math.random() * categories.length);
    return categories[index];
  };

  const handleNotify = () => {
    notify(value.message, {
      category: category(),
      timeout: value.timeoutSeconds * 1000,
    });
  };

  return (
    <MainLayout>
      {/* {showInstructions && <Instructions />} */}

      <FormWrapper>
        <FormContainer>
          <FormTitle>Create a toast message</FormTitle>
          <FormHolder>
            <Form>
              <Input
                label="Timeout"
                name="timeoutSeconds"
                type="number"
                value={value.timeoutSeconds}
                onChange={handleChange}
              />
              <Input
                label="Message"
                name="message"
                type="textarea"
                value={value.category}
                onChange={handleChange}
              />

              <Line />
              <ButtonWrapper>
                {" "}
                <Button type="button" nClick={() => clearNotifications()}>
                  Clear All
                </Button>
                <Button
                  type="button"
                  primary
                  onClick={handleNotify}
                  disabled={!value.message}
                >
                  Notify
                </Button>
              </ButtonWrapper>
            </Form>
          </FormHolder>
        </FormContainer>
      </FormWrapper>
    </MainLayout>
  );
}
