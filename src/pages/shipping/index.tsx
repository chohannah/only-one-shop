import clsx from 'clsx'
import {
  StyledShipping,
  StyledShippingImage,
  StyledShippingSubtitle,
  StyledShippingTable,
  StyledShippingText,
  StyledShippingTextGroup,
  StyledShippingTitle,
} from './styles'

export const Shipping = () => {
  return (
    <StyledShipping className={clsx('shipping')}>
      <StyledShippingTextGroup>
        <StyledShippingTitle>Shipping</StyledShippingTitle>

        <StyledShippingText className="first-paragraph">
          We ship to almost every country in the world and have customers in
          over 40 countries. All products in our shop are shipped from our
          workshop & warehouse in Germany.
        </StyledShippingText>

        <StyledShippingSubtitle>
          Shipping costs & handling
        </StyledShippingSubtitle>
        <StyledShippingText>
          We offer international shipping to almost any country. With every
          order we make sure your package is carefully and safely packed. To
          calculate shipping costs, just add the items to your cart and select
          your country from the list to get a shipping price at the checkout. We
          work with various parcel services and shipping costs as well as
          delivery time can vary depending on quantity, size and destination.
          The table below will provide a first orientation and overview. All
          orders will be processed as soon as possible, typically within
          48hours. With each order you will also receive a confirmation email
          along with your shipping number for tracking purposes.
        </StyledShippingText>

        <StyledShippingSubtitle>Insurance</StyledShippingSubtitle>
        <StyledShippingText>
          We insure each purchase during time in transit until it is delivered
          to you. Orders may require signature upon delivery, at which point
          responsibility for the shipment passes to you. If you have specified a
          recipient other than yourself for delivery purposes, you also accept
          that signature by the third party is sufficient proof of delivery and
          fulfillment by our shop.
        </StyledShippingText>

        <StyledShippingSubtitle>Payment methods</StyledShippingSubtitle>
        <StyledShippingText>
          We offer secure payment via Stripe. You can select one of the
          following payment methods such as Credit Card: MasterCard / VISA /
          America Express or SEPA Di­rect Debit as well as SO­FORT bank
          transfers for specific countries.
        </StyledShippingText>

        <StyledShippingSubtitle>Customs & Import taxes</StyledShippingSubtitle>
        <StyledShippingText>
          Please note that orders outside the European Union may be exposed to
          extra charges such as import duty and local taxes that have to be
          covered by the customer. Please inform yourself ahead at your local
          customs office about country-specific import charges. Every country
          has different regulations on how they handle imported goods.
        </StyledShippingText>

        <StyledShippingTable>
          <thead>
            <tr>
              <th>Country</th>
              <th>Shipping</th>
              <th>Delivery</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>USA & Canada</td>
              <td>from 18€</td>
              <td>5-7 days</td>
            </tr>

            <tr>
              <td>United Kingdom</td>
              <td>from 20€</td>
              <td>2-3 days</td>
            </tr>

            <tr>
              <td>Germany</td>
              <td>from 5€</td>
              <td>1-3 days</td>
            </tr>

            <tr>
              <td>European Union</td>
              <td>from 15€</td>
              <td>2-5 days</td>
            </tr>

            <tr>
              <td>Rest of Europe (non EU)</td>
              <td>from 29€</td>
              <td>2-5 days</td>
            </tr>

            <tr>
              <td>Australia / New Zealand</td>
              <td>from 29€</td>
              <td>7-10 days</td>
            </tr>

            <tr>
              <td>Asia</td>
              <td>from 25€</td>
              <td>7-10 days</td>
            </tr>

            <tr>
              <td>Russia</td>
              <td>from 29€</td>
              <td>5-7 days</td>
            </tr>

            <tr>
              <td>Emirates</td>
              <td>from 29€</td>
              <td>5-7 days</td>
            </tr>

            <tr>
              <td>Other countries</td>
              <td>on request</td>
              <td>5-7 days</td>
            </tr>
          </tbody>
        </StyledShippingTable>
      </StyledShippingTextGroup>

      <StyledShippingImage>
        <img
          src="https://i.ibb.co/wp66Rc3/shipping.jpg"
          alt="shipping"
          aria-label="A modern indoor setup with a white stereo system on a wooden cabinet, speakers, and controls. Nearby, there's a table with dried flowers, an oven with a white container, and hints of other home furnishings. It exemplifies how technology seamlessly blends with interior design for convenience in a contemporary home."
        />
      </StyledShippingImage>
    </StyledShipping>
  )
}
