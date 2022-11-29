import { BigInt } from "@graphprotocol/graph-ts"
import {
  SuperRareV1,
  WhitelistCreator,
  Bid,
  AcceptBid,
  CancelBid,
  Sold,
  SalePriceSet,
  OwnershipTransferred,
  Transfer,
  Approval
} from "../generated/SuperRareV1/SuperRareV1"
import { ExampleEntity } from "../generated/schema"

export function handleWhitelistCreator(event: WhitelistCreator): void {
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  let entity = ExampleEntity.load(event.transaction.from.toHex())

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if (!entity) {
    entity = new ExampleEntity(event.transaction.from.toHex())

    // Entity fields can be set using simple assignments
    entity.count = BigInt.fromI32(0)
  }

  // BigInt and BigDecimal math are supported
  entity.count = entity.count + BigInt.fromI32(1)

  // Entity fields can be set based on event parameters
  entity._creator = event.params._creator

  // Entities can be written to the store with `.save()`
  entity.save()

  // Note: If a handler doesn't require existing field values, it is faster
  // _not_ to load the entity from the store. Instead, create it fresh with
  // `new Entity(...)`, set the fields that should be updated and save the
  // entity back to the store. Fields that were not set or unset remain
  // unchanged, allowing for partial updates to be applied.

  // It is also possible to access smart contracts from mappings. For
  // example, the contract that has emitted the event can be connected to
  // with:
  //
  // let contract = Contract.bind(event.address)
  //
  // The following functions can then be called on this contract to access
  // state variables and other data:
  //
  // - contract.name(...)
  // - contract.totalSupply(...)
  // - contract.currentBidDetailsOfToken(...)
  // - contract.approvedFor(...)
  // - contract.isWhitelisted(...)
  // - contract.tokensOf(...)
  // - contract.ownerOf(...)
  // - contract.originalTokenOfUri(...)
  // - contract.balanceOf(...)
  // - contract.owner(...)
  // - contract.symbol(...)
  // - contract.salePriceOfToken(...)
  // - contract.tokenURI(...)
  // - contract.creatorOfToken(...)
  // - contract.creatorPercentage(...)
  // - contract.maintainerPercentage(...)
}

export function handleBid(event: Bid): void {}

export function handleAcceptBid(event: AcceptBid): void {}

export function handleCancelBid(event: CancelBid): void {}

export function handleSold(event: Sold): void {}

export function handleSalePriceSet(event: SalePriceSet): void {}

export function handleOwnershipTransferred(event: OwnershipTransferred): void {}

export function handleTransfer(event: Transfer): void {}

export function handleApproval(event: Approval): void {}
