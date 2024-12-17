import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Button, TextInput } from 'react-native';
import { useState } from 'react';
import Encoder from 'react-native-fast-encoder';
import SectionContainer from '../components/SectionContainer';
import SectionTitle from '../components/SectionTitle';
import SectionResult from '../components/SectionResult';
import Container from '../components/Container';

const enc = new Encoder();

interface Props {
  testVal: string;
}

export default function ({ testVal }: Props) {
  const [input, setInput] = useState('');
  const [encrypted, setEncrypted] = useState('');
  const [decrypted, setDecrypted] = useState('');
  const [encoded, setEncoded] = useState<Uint8Array>();

  return (
    <Container testID={'encrypt-decrypt'}>
      <SectionContainer testID={'encrypt'}>
        <SectionTitle>Encrypt</SectionTitle>
        <TextInput
          value={input}
          testID={'message'}
          onChangeText={(text) => {
            setInput(text);
          }}
          style={{ backgroundColor: Colors.white, borderRadius: 4 }}
          placeholder={'insert message here'}
        />
        <Button
          title={'Encrypt'}
          testID={'button'}
          onPress={() => {
            setEncoded(enc.encode(testVal));
            setEncrypted('Good');
          }}
        />
        {!!encrypted && (
          <SectionResult testID={'result'}>{encrypted}</SectionResult>
        )}
      </SectionContainer>
      {!!encrypted && (
        <SectionContainer testID={'decrypt'}>
          <SectionTitle>Decrypt</SectionTitle>
          <Button
            title={'Decrypt'}
            testID={'button'}
            onPress={() => {
              if (encoded) {
                const output = enc.decode(encoded);
                setDecrypted(output.toString());
              }
            }}
          />
          {!!decrypted && (
            <SectionResult testID={'result'}>{decrypted}</SectionResult>
          )}
        </SectionContainer>
      )}
    </Container>
  );
}
