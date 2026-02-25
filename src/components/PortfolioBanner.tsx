"use client";

import {
  Column,
  Row,
  Heading,
  Text,
  Media,
  SmartLink,
  Button,
} from "@once-ui-system/core";

export default function PortfolioBanner() {
  return (
    <Column
      maxWidth="m"
      border="neutral-alpha-weak"
      radius="xl"
      overflow="hidden"
      marginBottom="40"
    >
      <Row fillWidth wrap gap="0">
        <Column flex="1" padding="40" gap="16">
          <Heading variant="heading-strong-l">
            Engineered Digital Experiences
          </Heading>

          <Text variant="body-default-m" onBackground="neutral-weak">
            Selected projects in UI/UX design, frontend engineering,
            and scalable digital systems built for real-world impact.
          </Text>

          <Row gap="12" paddingTop="16">
            <Button
              href="https://portfolio.ikjoen.space"
              variant="primary"
              size="m"
            >
              Explore Full Portfolio →
            </Button>

            <Button
              href="mailto:rzkynaga1@email.com"
              variant="secondary"
              size="m"
            >
              Contact Me
            </Button>
          </Row>
        </Column>

        {/* RIGHT IMAGE */}
        <Column flex="1">
          <Media
            src="/images/portfolio-preview.png"
            alt="Portfolio Preview"
            aspectRatio="4/3"
            sizes="(max-width: 768px) 100vw, 480px"
          />
        </Column>
      </Row>
    </Column>
  );
}