import { View, Text, Modal, Pressable } from 'react-native';
import React from 'react';
import tw from '@/utils/tailwind';

interface Props {
	open: boolean;
	onClose: () => void;
}

const ModalPickerPhoto: React.FC<Props> = ({ open, onClose }) => {
	return (
		<Modal animationType="fade" transparent={true} visible={open} onRequestClose={() => onClose()}>
			<View style={tw`items-center justify-end flex-1 bg-blacktransparent-500 `}>
				<Pressable style={tw`absolute inset-0`} onPress={() => onClose()} />
				<View style={tw`w-full p-4 bg-white rounded-xl h-1/4`}>
					<Pressable onPress={() => onClose()}>
						<View style={tw`py-4 px-2 border border-gray-100 mt-5`}>
							<Text>Gáleria de imagenes</Text>
						</View>
					</Pressable>
					<Pressable onPress={() => onClose()}>
						<View style={tw`py-4 px-2 border border-gray-100 mt-2`}>
							<Text>Tomar foto</Text>
						</View>
					</Pressable>
				</View>
			</View>
		</Modal>
	);
};

export default ModalPickerPhoto;
