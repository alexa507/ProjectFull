FROM maven:3.8.4-openjdk-11 AS buildstage

WORKDIR /app

COPY . .

RUN mvn package

FROM openjdk:11 AS runstage

COPY --from=buildstage /app/target/project-f-0.0.1-SNAPSHOT.jar .

EXPOSE 9966

ENTRYPOINT ["java", "-jar", "project-f-0.0.1-SNAPSHOT.jar"]