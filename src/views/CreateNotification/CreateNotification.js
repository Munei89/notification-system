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
import Input from "../../components/Input";
import Button from "../../components/Button";
import { useNotifications } from "../../providers/NotificationsProvider/NotificationsProvider";
import { MainLayout } from "../../layouts";

export function CreateNotification() {
  const { notify, clearNotifications } = useNotifications();

  const [value, setValue] = useState({
    timeoutSeconds: 0,
    message: "A Message",
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
      <FormWrapper>
        <FormContainer>
          <FormTitle>Create a toast message</FormTitle>
          <FormHolder>
            <Form>
              <Input
                label="Timeout"
                name="timeoutSeconds"
                type="number"
                min="0"
                onInput={(e) => {
                  e.target.value =
                    !!e.target.value && Math.abs(e.target.value) >= 0
                      ? Math.abs(e.target.value)
                      : null;
                }}
                value={value.timeoutSeconds.toString()}
                onChange={handleChange}
              />
              <Input
                label="Message"
                name="message"
                type="textarea"
                placeholder="A message"
                value={value.category}
                onChange={handleChange}
              />

              <Line />
              <ButtonWrapper>
                {" "}
                <Button type="button" onClick={() => clearNotifications()}>
                  Clear All
                </Button>
                <Button
                  type="button"
                  primary="true"
                  lg="true"
                  onClick={handleNotify}
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

export default CreateNotification;
