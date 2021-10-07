/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { createBlock, registerBlockType } from '@wordpress/blocks';
import { Icon, thumbUp } from '@woocommerce/icons';
import { without } from 'lodash';

/**
 * Internal dependencies
 */
import Block from './block';
import sharedAttributes, {
	sharedAttributeBlockTypes,
} from '../../utils/shared-attributes';

const blockTypeName = 'woocommerce/product-top-rated';

registerBlockType( blockTypeName, {
	title: __( 'Top Rated Products', 'woo-gutenberg-products-block' ),
	icon: {
		src: <Icon srcElement={ thumbUp } />,
		foreground: '#7F54B3',
	},
	category: 'woocommerce',
	keywords: [ __( 'WooCommerce', 'woo-gutenberg-products-block' ) ],
	description: __(
		'Display a grid of your top rated products.',
		'woo-gutenberg-products-block'
	),
	supports: {
		align: [ 'wide', 'full' ],
		html: false,
	},
	example: {
		attributes: {
			isPreview: true,
		},
	},
	attributes: {
		...sharedAttributes,
	},

	transforms: {
		from: [
			{
				type: 'block',
				blocks: without( sharedAttributeBlockTypes, blockTypeName ),
				transform: ( attributes ) =>
					createBlock( 'woocommerce/product-top-rated', attributes ),
			},
		],
	},

	/**
	 * Renders and manages the block.
	 *
	 * @param {Object} props Props to pass to block.
	 */
	edit( props ) {
		return <Block { ...props } />;
	},

	save() {
		return null;
	},
} );
