import { useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";

import { DASHBOARD } from "src/constants/paths";

import PlainLayout from "src/layouts/PlainLayout";
import Button from "src/components/Button";
import Input from "src/components/Input";
import Text from "src/components/Text";
import ErrorMessage from "src/components/ErrorMessage";

import {
  HeroWrapper,
  DecriptionWrapper,
  GreetingWrapper,
  IlustrationWrapper,
  InputWrapper,
  ButtonEnterWrapper,
} from "./HomeStyles";

import useHomeFunction from "./HomeFunction";

function Home() {
  const { t } = useTranslation();
  const router = useRouter();

  const {
    form: { register, formState, setFocus },
    onSubmit,
  } = useHomeFunction();

  useEffect(() => {
    setFocus("name");

    // Prefetch the dashboard page
    router.prefetch(DASHBOARD);
  }, []);

  return (
    <PlainLayout>
      <HeroWrapper>
        <DecriptionWrapper>
          <GreetingWrapper>
            <Text.H1>
              <Text variant="primary" weight="bold">
                {t("Hi there!")}
              </Text>{" "}
              {t("Welcome to your educational showwcase")}
            </Text.H1>
          </GreetingWrapper>
          <Text size="lg" variant="neutral">
            {t('Type your name and click "Enter" below to begin')}
          </Text>
          <form onSubmit={onSubmit}>
            <InputWrapper>
              <div>
                <Input
                  placeholder={t("Your name")}
                  size="xl"
                  variant={formState.errors.name ? "danger" : "neutral"}
                  {...register("name")}
                />
                <ErrorMessage
                  id="error_name"
                  name="name"
                  errors={formState.errors}
                />
              </div>
              <ButtonEnterWrapper>
                <Button htmlType="submit" variant="primary" size="xl" bold>
                  {t("Enter")}
                </Button>
              </ButtonEnterWrapper>
            </InputWrapper>
          </form>
        </DecriptionWrapper>
        <IlustrationWrapper>
          <Image src="/images/hero.svg" layout="fill" objectFit="contain" />
        </IlustrationWrapper>
      </HeroWrapper>
    </PlainLayout>
  );
}

export default Home;
