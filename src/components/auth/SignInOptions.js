import { useEffect, useState } from "react";
import firebase from "firebase";
import Link from "next/link";
import { auth, googleAuthProvider } from "lib/firebase";
import {
  Flex,
  Text,
  Input,
  Button,
  Container,
  Heading,
  Stack,
  Center,
  InputGroup,
  InputLeftAddon,
  BeatLoader,
  useToast,
} from "@chakra-ui/react";
import "@fontsource/poppins";
import { useRouter } from "next/router";
import { FcGoogle } from "react-icons/fc";
import { Layout } from "./../onboard/Layout";
// Sign in with Phone button
export function SignInOptions() {
  const router = useRouter();
  const [mynumber, setNumber] = useState("+91");
  const [otp, setOtp] = useState("");
  const [show, setShow] = useState(false);
  const [googleShow, setGoogleShow] = useState(true);
  const [final, setFinal] = useState("");
  const [isVerifyClicked, setIsVerifyClicked] = useState(true);
  const [isConfirmClicked, setIsConfirmClicked] = useState(true);

  const toast = useToast();

  const signInWithGoogle = async () => {
    await auth.signInWithPopup(googleAuthProvider).then((result) => {
      router.push("/onboard");
    });
  };

  // Validate OTP
  const ValidatePhoneOTP = () => {
    setIsConfirmClicked(false);
    if (otp === null || final === null) return;
    final
      .confirm(otp)
      .then((result) => {
        router.push("/onboard");
      })
      .catch((err) => {
        // alert('Wrong code');
        toast({
          title: "Wrong Code",
          description: "",
          status: "error",
          duration: 1000,
          isClosable: true,
        });
      });
  };

  const signInWithPhone = async () => {
    if (mynumber === "" || mynumber.length < 10) {
      toast({
        title: "Phone number must have 10 numbers!",
        description: "",
        status: "error",
        duration: 1000,
        isClosable: true,
      });
    } else {
      setIsVerifyClicked(false);
      let verify = new firebase.auth.RecaptchaVerifier("recaptcha-container");
      let newnumber = "+91" + mynumber;
      auth
        .signInWithPhoneNumber(newnumber, verify)
        .then((result) => {
          setFinal(result);
          toast({
            title: "OTP Sent",
            description: "",
            status: "success",
            duration: 1000,
            isClosable: true,
          });
          setShow(true);
          setGoogleShow(false);
        })
        .catch((err) => {
          alert(err);
          window.location.reload();
        });
    }
  };

  const setHandler = () => {
    setShow(!show);
    setGoogleShow(!googleShow);
  };
  const handleKeyPressVerify = (e) => {
    if (e.key === "Enter") {
      signInWithPhone();
    }
  };
  const handleKeyPressConfirm = (e) => {
    if (e.key === "Enter") {
      ValidatePhoneOTP();
    }
  };
  return (
    <Layout value={0}>
      <Flex flexDirection={"column"} w="100%">
      <Flex  flexDirection={"column"} margin={6}>
        <Flex style={{ display: !show ? "block" : "none" }} w="100%">
          <Heading
            size={"lg"}
            textAlign={{ base: "center", md: "left" }}
            mb={"24px"}
          >
            Sign in to CaNDiD!
          </Heading>
          <InputGroup>
            <InputLeftAddon height={50} fontSize={18}>
              {" "}
              +91{" "}
            </InputLeftAddon>
            <Input
              type="tel"
              // value={mynumber}
              bg="white"
              focusBorderColor="#E78692"
              borderColor={"black"}
              border="1px"
              height={50}
              fontSize={"lg"}
              width={"full"}
              onChange={(e) => {
                setNumber(e.target.value);
              }}
              onKeyPress={handleKeyPressVerify}
            />
          </InputGroup>
          <Flex id="recaptcha-container" mt={"8px"}></Flex>
          <Button
            // bg='#D7354A'
            // _hover={{ bg: '#C23043' }}
            // color='white'
            // height={'3.1rem'}
            // width='full'
            // fontSize={'lg'}

            variant={"primary"}
            marginTop="8px"
            marginBottom="24px"
            // spinner={<BeatLoader size={8} color='white' />}
            // onClick={signInWithPhone}
            // isLoading={!isVerifyClicked}
            // loadingText={!isVerifyClicked? 'Sending OTP' : ''}
            // isLoading= { isVerifyClicked ? isLoading : ''}
            onClick={isVerifyClicked ? signInWithPhone : null}
          >
            Verify
          </Button>
        </Flex>
        <Flex style={{ display: show ? "block" : "none" }} w="100%">
          <Heading
            size={"lg"}
            textAlign={{ base: "center", md: "left" }}
            mb={"16px"}
          >
            Verify OTP
          </Heading>
          <Input
            type="tel"
            bg="white"
            textAlign={"center"}
            focusBorderColor="#E78692"
            _hover={{ borderColor: "#E78592" }}
            borderColor="black"
            width={{ base: "full", md: "sm" }}
            height={50}
            fontSize={18}
            placeholder={"Enter your OTP"}
            marginBottom="16px"
            onChange={(e) => {
              setOtp(e.target.value);
            }}
            onKeyPress={handleKeyPressConfirm}
          />

          <Flex justifyContent={"space-between"}>
            <Button
              // bg={'#D7354A'}
              // _hover={{ bg: '#C23043' }}
              // borderRadius={10}
              // color='white'
              width={120}
              height={50}
              fontSize={18}
              marginTop="8px"
              marginBottom="8px"
              onClick={setHandler}
            >
              Back
            </Button>
            <Button
              display="block"
              bg={"#D7354A"}
              _hover={{ bg: "#C23043" }}
              borderRadius={10}
              color="white"
              width={120}
              height={50}
              fontSize={18}
              marginTop="8px"
              marginBottom="8px"
              onClick={isConfirmClicked ? ValidatePhoneOTP : null}
            >
              Confirm
            </Button>
          </Flex>
        </Flex>
        <Flex style={{ display: googleShow ? "inline" : "none" }} w="100%">
          <Flex style={{ flexDirection: "row", alignItems: "center" }} my="8px">
            <Flex style={{ flex: 1, height: 1, backgroundColor: "black" }} />
            <Flex>
              <Text style={{ width: 50, textAlign: "center" }}>Or</Text>
            </Flex>
            <Flex style={{ flex: 1, height: 1, backgroundColor: "black" }} />
          </Flex>
          <Flex w="100%">
            <Flex w="100%">
              <Button
                borderRadius={10}
                width="full"
                height={50}
                fontSize={18}
                border="1px"
                // fontWeight='black'
                bg={"white"}
                _hover={{ bg: "gray.50", border: "2px" }}
                onClick={signInWithGoogle}
              >
                <Flex mr="8px">
                  <FcGoogle size={25} />{" "}
                </Flex>
                Continue with Google
              </Button>
            </Flex>
          </Flex>
          <Flex mt="16px">
            <Text>
              {" "}
              By signing up, you agree to our
              <Link href="/terms" passHref>
                <Text
                  display={"inline"}
                  textColor={"#D7354A"}
                  cursor={"pointer"}
                >
                  {" "}
                  Privacy{" "}
                </Text>
              </Link>
              and
              <Link href="/privacy" passHref>
                <Text
                  display={"inline"}
                  textColor={"#D7354A"}
                  cursor={"pointer"}
                >
                  {" "}
                  Terms{" "}
                </Text>
              </Link>
            </Text>
          </Flex>
        </Flex>
        </Flex>
      </Flex>
    </Layout>
  );
}
